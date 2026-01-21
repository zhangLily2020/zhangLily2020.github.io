// This is the card that displays the project

// eslint-disable-next-line react/prop-types
const Card = ({image, title, subtitle, link, imageClassName}) => {
    return (
        <a href={link} className="m-4 block max-w-3xl min-w-md min-h-md max-h-max overflow-hidden rounded-3xl">
            <div className="relative">
                {/* <div className="m-5"> */}
                    <div className="flex justify-center items-center w-full">
                        <img
                            className={imageClassName ? imageClassName + " rounded-lg" : "w-full rounded-lg"}
                            src={image}
                            alt={title}
                        />
                    </div>
                    <div className="flex flex-col justify-between p-4 text-white">
                        <h2 className="mb-2 text-2xl font-bold">
                            {title}
                        </h2>
                        <p className="mb-4 text-sm font-medium">{subtitle}</p>
                    </div>
                {/* </div> */}
            </div>
        </a>
    )
}

export default Card