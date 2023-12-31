import React from "react";

// components
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";

const CardItems = ({ cardsStyle, title, contents, description, ...props }) => {
  return (
    <Card className={cardsStyle} {...props}>
      <CardHeader>
        <CardTitle className="text-xl xl:text-[30px]">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{contents}</CardContent>
    </Card>
  );
};

export default CardItems;
