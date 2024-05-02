import '../../pages/Home/Home.css'

function AddProject() {
  return (    
          <div className='proj'>
            <h2><b>Create new project</b></h2>
            <div className='details'>
              <formcontrol class='input'>
                <p>Project Name:</p>
                <input type="text" />
              </formcontrol>
              <formcontrol class='input'>
                <p>Description:</p>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
              </formcontrol>
              <formcontrol class='input'>
                <p>Due Date:</p>
                <input type="date" />
              </formcontrol>
              <formcontrol class='input'>
                <p>Project category:</p>
                <select id="category" name="category">
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </formcontrol>
              <formcontrol class='input'>
                <p>Assign to:</p>
                <select id="category" name="category">
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </formcontrol>
            </div>
          </div>
  )
}

export default AddProject
