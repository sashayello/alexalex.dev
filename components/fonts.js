import { Global } from "@emotion/react"

const Fonts = () => (
    <Global
        styles={`
            @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap');
        `}
    />
)

export default Fonts