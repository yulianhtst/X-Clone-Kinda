import { Box, Button, Typography } from "@mui/material";
import AsideComponent from "./Aside";
import FeedComponent from "./Feed";
import SuggestionsComponent from "./Suggestions";
import { useRouter } from "next/router";
import { routeRenderingHandler } from "@/HOC/routeRenderingHandler";

function RoutingComponent(props) {
    const { renderComponent } = props

    return (
        <Box
            display="flex"
            sx={{
                ">*": { flexBasis: '100%' }

            }}
        >
            {/* Навигацията ще остане същата стейта ще се пази в контекст*/}
            <AsideComponent />
            {/* МОЖЕМ ДА ЗАРЕДИМ ВСИЧКИ С КОНДИШЪНЪЛ МОЖЕМ И ДА НАПРАВИМ СУИТЧ НЯКАКЪВ МОЖЕМ ДА НАПРАВИМ ДЕПЕНДЪНСИ ИНДЖЕКШЪН*/}
            {/* Съдържанието трябва да е динамично и да се сменя според това на кой page сме*/}
            {/* <FeedComponent /> */}
            {renderComponent}


            
            {/* НЕ Е ПРИОРИТЕТ */}
            <SuggestionsComponent />

        </Box >
    )
}

export default routeRenderingHandler(RoutingComponent)