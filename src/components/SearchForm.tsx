"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  
  SelectItem,
 
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarIcon } from "lucide-react"
import { format } from "date-fns";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Calendar as calendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";

const SearchForm = () => {
  const form = useForm();
  return (
    <div className="p-3 grid w-full  items-end gap-4 rounded-lg bg-black sm:grid-cols-2 lg:grid-cols-4">
      <Form {...form}>
        <FormField
          control={form.control}
          name="Address"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-white">Property</FormLabel>
                <Select>
                  <SelectTrigger className="bg-white" >
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="rent">Rent</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        ></FormField>
        <FormField
        control={form.control}
        name="Address"
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ field })=> {
          return(
            <FormItem>
              <FormLabel className="text-white">Address</FormLabel>
              <FormControl className="bg-white">
              <Input placeholder="Search by Address" />
              </FormControl>
            </FormItem>
          );
        }}>

        </FormField>
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white" >Buy/Sell</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              <FormMessage />
            </FormItem>
          )}
          
        />
                <Button type="submit" className="bg-slate-800 text-white ">Search</Button>

      </Form>
    </div>
  );
};

export default SearchForm;
