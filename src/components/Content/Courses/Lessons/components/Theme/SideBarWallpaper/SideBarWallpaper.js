import Bg from "../../SideBar/Background/mac.jpg"
import Pink from "../../SideBar/Background/pink.jpg"
import Anapa from "../../SideBar/Background/anapa.jpg"

const SideBarBackgrounds = [
    {
        SideBarWallpaper: Bg,
        background: "#ffffff00",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: "https://wallpapercave.com/wp/wp7743169.jpg",
        background: "#00000033",
        color: "#fafafa",
    },
    {
        SideBarWallpaper: Anapa,
        background: "#ffffff00",
        color: "#222222",
    },
].map((item) => {
        return {
            SideBarWallpaper: item.SideBarWallpaper,
            background: item.background,
            color: item.color,
        }
    }
)

export default SideBarBackgrounds;