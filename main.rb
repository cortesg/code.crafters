require "sinatra"

get "/" do
	erb :index
end

get "/about" do
	erb :about
end


get "/contact" do
	# "form goes here"
	erb :contact
end

post "/contact_response" do
	params.inspect
	erb :response
end

get "/real_words" do
	"stuff"
end