json.data do
  json.partial! "visits/visit", visit: @visit, anon: true
end
