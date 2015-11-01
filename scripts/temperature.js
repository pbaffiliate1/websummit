/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 if (request.parameters.temp>50) {
  sendMail("caroline@scriptr.io", "thermostat", "it's hot in here!", "do something");
}			