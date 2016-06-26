require "sendgrid-ruby"

client = SendGrid::Client.new do |c|
	c.api_key = ENV["SENDGRID_API_KEY"]
end

mail_person

mail = SendGrid::Mail.new do |m|
	m.to = "gino.angelo.cortes@gmail.com" #params[:to]
 	m.from = "gino.angelo.cortes@gmail.com" #params[:from]
 	m.subject = "Test Sendgrid" #params[:subject]
	m.text = "Hey gino." #params[:body]
end

res = client.send(mail)
puts res.code
puts res.body