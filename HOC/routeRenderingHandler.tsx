import { useRouter } from "next/router";

import BookmarksPage from "@/components/pages/BookmarksPage";
import CommunitiesPage from "@/components/pages/CommunitiesPage";
import ExplorePage from "@/components/pages/ExplorePage";
import HomePage from "@/components/pages/HomePage";
import ListPage from "@/components/pages/ListsPage";
import MessagesPage from "@/components/pages/MessagesPage";
import MorePage from "@/components/pages/MorePage";
import NotificationPage from "@/components/pages/NotificationsPage";
import PremiumPage from "@/components/pages/PremiumPage";
import ProfilePage from "@/components/pages/ProfilePage";

interface IPaths {
  [route: string]: JSX.Element;
}

export const routeRenderingHandler = (Component: React.FC) => {

  const WrapperComponent = (props: any) => {
    const routePath = useRouter().pathname

    // !!!!!!!!!!!!!!!!!!!!! ДА СЕ ВЗЕМЕ ПРЕДВИД ЧЕ ЩЕ ИМА НЕСТНАТИ РОУТОВЕ
    const paths: IPaths = {
      '/bookmarks': <BookmarksPage />, //НЕСТЕД
      '/communities': <CommunitiesPage />,
      '/explore': <ExplorePage />,
      '/': <HomePage />,
      '/lists': <ListPage />,//НЕСТЕД ?????
      '/messages': <MessagesPage />,//НЕСТЕД
      '/more': <MorePage />,
      '/notifications': <NotificationPage />,//НЕСТЕД
      '/premium': <PremiumPage />,
      '/profile': <ProfilePage />,//НЕСТЕД
    }

    props = {
      ...props,
      renderComponent: paths[routePath]
    }


    return <Component {...props} />

  };

  return WrapperComponent;
};
