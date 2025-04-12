import Job from "../Job.jsx";

export default function Experience({ experienceRef }) {
    return (
        <section className="experience" ref={experienceRef}>
            <h2>Experience</h2>
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
        </section>
    );
}