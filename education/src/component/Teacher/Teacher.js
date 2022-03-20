import React from 'react'
import img from './Img.jpg';
import './Background.css'

const Teacher = () => {

  const handleClick=()=>{
    document.getElementsByClassName("alert alert-primary").innerHTML="YOu have uploaded successfully"
  }
 
  return (
    <>
      <div className="background bg-obj-fit-cover " style={{backgroundImage:`url(${img})` } } >

  
        
<button type="button " className="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body"></div>
<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>

    </div>
  </div>
</div>

<form className='upload d-flex justify-content-end'>
  <div className="form-group form-inline ">
  
    <input type="file" className="form-control" placeholder="Upload your Task" id="exampleFormControlFile1" />
  
  </div>
  <button type='button' className='btn btn-success' onClick={handleClick}>Upload Task</button>
</form>
</div>
<div className="alert alert-primary" role="alert">

</div>

    </>
  )
}

export default Teacher