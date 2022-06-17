import { useRoutes } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import StudyRoom from "./my-studyroom/StudyRoom";
import MyFavourite from "./my-favourite/MyFavourite";
import BookPurchase from "./book-purchase/BookPurchase";
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
