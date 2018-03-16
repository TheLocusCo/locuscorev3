Paperclip::Attachment.default_options[:storage] = :s3
Paperclip::Attachment.default_options[:s3_credentials] = {
  :bucket => ENV['S3_BUCKET'],
  :access_key_id => ENV['AWS_ACCESS_KEY_ID'],
  :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY'],
}
Paperclip::Attachment.default_options[:s3_region] = 'us-west-1'
Paperclip::Attachment.default_options[:s3_permissions] = 'public-read'
Paperclip::Attachment.default_options[:s3_protocol] = 'https'
Paperclip::Attachment.default_options[:path] = "/uploads2/:class/:id_partition/:style/:hash.:extension"

#Paperclip::Attachment.default_options[:fog_directory] = ""
#Paperclip::Attachment.default_options[:fog_host] = "http://localhost:3000"

Paperclip::Attachment.default_options[:hash_secret] = "acdb9ff606b7c6b13df85b6d1f8034438a2790764015b86595b6985133a64b7cc39dd485a2bdc90b81c7c6dd67dd11ba" #SecureRandom.hex(48)
