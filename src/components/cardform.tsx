import * as React from "react"
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
    <div className="w-full">
      <Card>
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
            Urban Service Company
          </CardTitle>
          <CardDescription className="text-base md:text-lg text-gray-600">
            Top microwave oven repair in Bangalore and surrounding areas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form 
            target="_blank" 
            method="post" 
            action="https://formspree.io/f/mgegrqwy"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Enter Your Name" 
                  className="w-full" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Example@gmail.com" 
                  className="w-full" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="+91-xxxxxxxxxx" 
                  className="w-full" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand" className="text-sm font-medium">Brand</Label>
                <Select name="brand">
                  <SelectTrigger id="brand" className="w-full cursor-pointer">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent>
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
            <div className="flex justify-end pt-4">
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-black hover:bg-gray-900 text-white px-8 py-2 rounded-lg transition-colors duration-300 cursor-pointer"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
