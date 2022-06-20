import { useRoutes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import StudyRoom from "./pages/my-studyroom/StudyRoom";
import MyFavourite from "./pages/my-favourite/MyFavourite";
import BookPurchase from "./pages/book-purchase/BookPurchase";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "studyroom",
      element: <StudyRoom />,
    },
    {
      path: "myfavourite",
      element: <MyFavourite />,
    },
    {
      path: "bookpurchase",
      element: <BookPurchase />,
    },
  ]);
}
