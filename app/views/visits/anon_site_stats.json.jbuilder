json.data do
  json.partial! "visits/visit", visit: @visit, locals: {anon: true}
end
