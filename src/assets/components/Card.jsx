export default function Card({ actor }) {
    const {image, name, birth_year, known_for, biography} = actor
    return (
        <div className="card" style={{width:" 18rem"}}>
            <img src={image} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h3>{name}</h3>
                    <h4>{birth_year}</h4>
                    <p>{known_for}</p>
                    <p className="card-text">{biography}</p>
                </div>
        </div>
    )
}