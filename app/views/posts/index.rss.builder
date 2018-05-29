title = "Louis Alridge - TheLocusCo - Ruby on Rails Full Stack Web Development Blog"
author = "Louis Alridge"
description = "Louis Alridge - Full Stack Developer specializing in Elixir, React, Ruby, and Chef. Blogging about startup life, Ruby on Rails, Javascript and DevOps"
keywords = "rails, ruby on rails, react, elixir, programming, redux, web application framework, api"
markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, extensions = {})
#encoding: UTF-8

xml.instruct! :xml, version: "1.0"

xml.rss :version => "2.0", "xmlns:atom" => "http://www.w3.org/2005/Atom" do
  xml.channel do
    xml.tag!("atom:link",  "href"=>"https://thelocus.co/blog.rss", "rel"=>"self", "type"=>"application/rss+xml")
    xml.title title
    xml.link 'https://thelocus.co'
    xml.description description
    xml.language 'en'
    xml.pubDate @posts.first.created_at.to_s(:rfc822)
    xml.lastBuildDate @posts.first.created_at.to_s(:rfc822)

    @posts.each do  |post|
      xml.item do
        xml.title post.title
        xml.description markdown.render(post.content.html_safe)
        xml.pubDate post.created_at.to_s(:rfc822)
        xml.link post_url(post)
      end
    end
  end
end
