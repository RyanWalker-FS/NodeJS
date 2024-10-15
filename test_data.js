/* Get all Courses

pm.test("Retrieve all courses", function () {
  pm.expect(pm.response.code).to.equal(200);
  pm.expect(pm.response.json()).to.be.an("array");
  pm.expect(pm.response.json().length).to.be.above(0);
});

pm.test("Retrieve courses with pagination", function () {
  pm.expect(pm.response.code).to.equal(200);
  pm.expect(pm.response.json()).to.be.an("array");
  pm.expect(pm.response.json().length).to.be.at.least(2);
  pm.expect(pm.response.json()[0].name).to.equal();
  pm.expect(pm.response.json()[1].name).to.equal();
});


Get Course by ID

pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});


pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});


pm.test("Response has the required fields - _id, title, description, credits, and instructor", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData._id).to.exist;
    pm.expect(responseData.title).to.exist;
    pm.expect(responseData.description).to.exist;
    pm.expect(responseData.credits).to.exist;
    pm.expect(responseData.instructor).to.exist;
});


pm.test("Credits is a non-negative integer", function () {
  const responseData = pm.response.json();
  
  pm.expect(responseData).to.be.an('object');
  pm.expect(responseData.credits).to.be.a('number');
  pm.expect(responseData.credits).to.be.at.least(0);
});


pm.test("Instructor field is a non-empty string", function () {
  const responseData = pm.response.json();
  pm.expect(responseData.instructor).to.be.a('string').and.to.have.lengthOf.at.least(1, "Instructor field should not be empty");
});

Post New Course

pm.test("Response status code is 201", function () {
  pm.expect(pm.response.code).to.equal(201);
});


pm.test("Response time is within an acceptable range", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});


pm.test("Response has the required fields", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.have.property('title');
    pm.expect(responseData).to.have.property('description');
    pm.expect(responseData).to.have.property('credits');
    pm.expect(responseData).to.have.property('instructor');
    pm.expect(responseData).to.have.property('_id');
    pm.expect(responseData).to.have.property('__v');
});


pm.test("Credits is a non-negative integer", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData.credits).to.be.a('number');
    pm.expect(responseData.credits).to.be.at.least(0, "Credits should be a non-negative integer");
});

Post New Course

pm.test("Instructor field must be a non-empty string", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.instructor).to.be.a('string').and.to.have.lengthOf.at.least(1, "Instructor field should be a non-empty string");
});


Update Course

pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Response has the required fields", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.have.property('_id');
    pm.expect(responseData).to.have.property('title');
    pm.expect(responseData).to.have.property('description');
    pm.expect(responseData).to.have.property('credits');
    pm.expect(responseData).to.have.property('instructor');
    pm.expect(responseData).to.have.property('__v');
});


pm.test("Credits is a non-negative integer", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.credits).to.be.a('number');
    pm.expect(responseData.credits).to.be.at.least(0, "Credits should be a non-negative integer");
});


pm.test("Response time is less than 300ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(300);
});


pm.test("Content-Type is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});


Delete Course

pm.test("Response status code is 404", function () {
    pm.expect(pm.response.code).to.equal(404);
});


pm.test("Response has the required field - message", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.message).to.exist;
});


pm.test("Content-Type header is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});


pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});
*/
