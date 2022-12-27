class User < ApplicationRecord
  #the 'has_secure_password' part does the P and I part of SPIRE
  has_secure_password

  validates :username,
    uniqueness: true,
    length: { in: 3..30 },
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email,
    uniqueness: true,
    length: { in: 3..255 },
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  #makes sure that the use has a session token before doing the validation that a session token must be present
  before_validation :ensure_session_token

  #user authentication below
  def self.find_by_credentials(credential, password)
    if (URI::MailTo::EMAIL_REGEXP).match(credential)
      user = User.find_by(email: credential)
    else
      user = User.find_by(username: credential)
    end

    if user && user.authenticate(password)
      return user
    else
      return false
    end
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    return self.session_token
  end

  private
  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64
    end
    return token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
