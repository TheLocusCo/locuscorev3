json.data do
  json.array! @visits, partial: 'visits/visit', as: :visit, locals: {anon: true}
end
