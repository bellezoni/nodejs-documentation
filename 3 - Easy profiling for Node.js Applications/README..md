npm start
curl -X GET "http://localhost:80/newUser?username=Filipe&password=123123"
ab -k -c 20 -n 250 "http://localhost:80/auth?username=Filipe&password=123123"