import '../components/input/pages/styled_component/StaffCreateForm.css'

function StaffCreateForm() {
    return (
        <>
            <div className="cont">
            <div className="main-box">
                <div className="create">
                <form action="">
                    <h2>CREATE STAFF</h2>
                    <i className="fa fa-fw fa-staff-o" aria-hidden="true"></i>
                    <input type="text"
                        className="staff"
                        placeholder="STAFF LICENSE"/>

                    <button className="login">Submit</button>
                </form>
                </div>
            </div> 
            </div>
        </>
    )
}

export default StaffCreateForm