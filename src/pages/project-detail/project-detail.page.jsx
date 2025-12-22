import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./project-detail.styles.scss";



export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
        <article className="project-detail">
            {/* Title */}
            <h1>{project.title}</h1>

            {/* Overview */}
            <p className="overview">{project.overview}</p>

            {/* Visuals */}
            <div className="project-visuals">
                {project.images?.map(img => (
                    <img key={img} src={img} alt={project.title} />
                ))}
            </div>

            {/* Business Questions */}
            <section>
                <h2>Business Questions</h2>
                <ul>
                    {project.businessQuestions.map(q => (
                        <li key={q}>{q}</li>
                    ))}
                </ul>
            </section>

            {/* Approach */}
            <section>
                <h2>Approach</h2>
                <ul>
                    {project.approach.map(step => (
                        <li key={step}>{step}</li>
                    ))}
                </ul>
            </section>

            {/* Models */}
            <section>
                <h2>Models Used</h2>
                <ul>
                    {project.models.map(model => (
                        <li key={model}>
                            <strong>{model.name}</strong> — {model.description}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Impact */}
            <section>
                <h2>Business Impact</h2>
                <ul>
                    {project.impact.map(point => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </section>

            {/* Tools */}
            <section>
                <h2>Tools & Technologies</h2>
                <p>{project.tools.join(", ")}</p>
            </section>

            {/* Code */}
            <a href={project.github} target="_blank" rel="noreferrer">
                View Code on GitHub
            </a>
        </article>
    );
}
