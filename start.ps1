cd react-app
# npm install # I'm not sure we need to run this each time, it's a bit slow.
npm run build
cd ../flask-server
python main.py # I don't think we need authbind here