Dir["#{Rails.root}/lib/extensions/*.rb"].each { |file| require file }
require "textacular"
