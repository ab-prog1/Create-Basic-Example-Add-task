import React from 'react'

function Form({todo, change, submit, error}) {
     return (
         <form onSubmit={submit} className="py-3">
              <div className="form-group row ">
                    <div className="col-8 ">
                         <input type="text"
                          className="form-control-plaintext mb-2 border-bottom"
                          value={todo}
                          onChange={change}
                          />
                          {
                               error && <small className="text-danger pt-3">{error}</small>
                          }
                    </div>
                    <div className="col-4 me-40">
                         <button type='submit' className="btn btn-primary"> Add Task</button>
                    </div>
              </div>
         </form>
     )
}

export default Form
