const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    
    <label for="email" class="col-sm-2 control-label">Author Email</label>
    <div><input id="email" name="email" type="text" class="form-control"/></div>
    
    <div class="form-group">
      <label for="name" class="col-sm-2 control-label">Author Name</label>
      <div >
        <input id="name" name="name" type="text" class="form-control"/>
      </div>
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div >
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <label for="content" class="col-sm-2 control-label">Content</label>
    <div><input id="content" name="content" type="text" class="form-control"/></div>
    
    <label for="status" class="col-sm-2 control-label">Status</label>
    <div><input id="status" name="status" type="text" class="form-control"/></div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);