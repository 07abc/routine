const ClassCard = (props) => {
  return (
    <div>
      {props.classes.map((cl) => (
        <div class="card w-75">
          <div class="card-body ">
            <h5 class="card-title">{cl.courseTime}</h5>
            <h5 class="card-title">{cl.courseNo}</h5>
            <h5 class="card-title">{cl.courseName}</h5>
            <h6 class="card-title">{cl.courseTeacher}</h6>

            <h6 class="card-title">
              Meeting ID: {cl.Meeting_ID}
              <br />
              Pass Code: {cl.Password}
            </h6>
            <a href={cl.courseLink} class="btn btn-primary">
              Class Link
            </a>
            <p class="card-text">{cl.comment}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ClassCard
