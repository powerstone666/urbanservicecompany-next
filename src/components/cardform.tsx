import * as React from "react"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <>
      <Head>
        <title>Top Microwave Repair Services in Bangalore | Urban Service Company</title>
        <meta name="description" content="Top microwave repair services in Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur. We also offer repair services for AC, washing machines, and other appliances." />
        <meta name="keywords" content="microwave repair, AC repair, washing machine repair, Bangalore, Marathahalli, Whitefield, Electronic City, HSR Layout, Koramangala, Indiranagar, JP Nagar, BTM Layout, Banashankari, Hebbal, Yelahanka, Jayanagar, Malleshwaram, Rajajinagar, RT Nagar, Vijayanagar, Bannerghatta Road, KR Puram, CV Raman Nagar, Majestic, Peenya, Jalahalli, Yeshwanthpur, Basaveshwaranagar, Vidyaranyapura, Hesaraghatta, Nagarbhavi, Kengeri, Magadi Road, Rajarajeshwari Nagar, Kanakapura Road, Sarjapur Road, Kadugodi, Bommanahalli, Begur, Kudlu Gate, Hosur Road, Bellandur, Sarjapur" />
      </Head>
      <h1 className="text-white text-2xl md:text-4xl font-bold text-center pt-8 pb-4">Schedule a call with us in one click</h1>
      <Card className="w-[350px] md:w-1/2 md:mt-8">
        <CardHeader>
          <CardTitle>Urban Service Company</CardTitle>
          <CardDescription>Top microwave oven repair in Bangalore and surrounding areas</CardDescription>
        </CardHeader>
        <CardContent>
          <form target="_blank" method="post" action="https://formspree.io/f/mgegrqwy">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Enter Your Name" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Example@gmail.com" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91-xxxxxxxxxx" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="brand">Brand</Label>
                <Select name="brand">
                  <SelectTrigger id="brand">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="samsung">Samsung</SelectItem>
                    <SelectItem value="lg">LG</SelectItem>
                    <SelectItem value="bosch">Bosch</SelectItem>
                    <SelectItem value="panasonic">Panasonic</SelectItem>
                    <SelectItem value="whirlpool">Whirlpool</SelectItem>
                    <SelectItem value="onida">Onida</SelectItem>
                    <SelectItem value="sharp">Sharp</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
