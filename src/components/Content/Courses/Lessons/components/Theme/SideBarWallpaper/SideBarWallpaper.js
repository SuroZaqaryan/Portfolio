import Bg from "../../SideBar/Background/mac.jpg"
import Pink from "../../SideBar/Background/pink.jpg"
import Anapa from "../../SideBar/Background/anapa.jpg"

const SideBarBackgrounds = [
    {
        SideBarWallpaper: Bg,
    },
    {
        SideBarWallpaper: Pink,
    },
    {
        SideBarWallpaper: Anapa,
    },
].map((item) => {
        return {
            SideBarWallpaper: item.SideBarWallpaper,
        }
    }
)

export default SideBarBackgrounds;