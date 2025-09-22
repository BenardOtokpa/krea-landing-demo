import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Button } from "./ui/button";

export default function Cards() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>new image model</CardTitle>
      </CardHeader>
      <CardContent>
        <h1>WAN 2.2</h1>
      </CardContent>
      <CardFooter>
        <div className="">
          <h1>WAN 2.2 Image generation</h1>
          <p>
            Generate complex imgaes with the brand new and powerful WAN 2.2
            model. Exceptional prompt adherence and ultra-realistics textures.
          </p>
        </div>
        <Button>Try WAN 2.2</Button>
      </CardFooter>
    </Card>
  );
}
