npm start<br>
curl -X GET "http://localhost:80/newUser?username=Filipe&password=123123"<br>
ab -k -c 20 -n 250 "http://localhost:80/auth?username=Filipe&password=123123"