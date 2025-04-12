import myPhoto from '../assets/my-photo.jpg';

export default function Job() {
    return (
        <div className="job">
            <h2>Job Title</h2>
            <p>Job Description</p>
            <img src={myPhoto} alt="My photo" />
        </div>
    );
}