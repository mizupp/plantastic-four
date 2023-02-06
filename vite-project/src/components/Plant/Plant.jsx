// Linked to search page
// Creates an article of each plant

const Plant = ({ plant }) => {
    return (
        <>
            <article>
                <h2>{plant.name}</h2>
                {/* We can add other details here to display */}
            </article>
        </>
    )
};

export default Plant;