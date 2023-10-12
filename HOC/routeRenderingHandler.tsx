import { useRouter } from "next/router";
import Explore from "@/pages/explore";
import ExplorePage from "@/components/pages/ExplorePage";

export const routeRenderingHandler = (Component: React.FC) => {

  const WrapperComponent = (props: any) => {
    const routePath = useRouter().pathname
    const paths = {
      // '/':
      '/explore': <ExplorePage />
    }

    props = {
      ...props,
      renderComponent: paths[routePath]
    }


    return <Component {...props} />

  };

  return WrapperComponent;
};
