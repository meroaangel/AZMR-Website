import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  requirements: z
    .string()
    .min(10, "Please provide more details about your requirements"),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactSectionProps {
  onSubmit?: (data: ContactFormValues) => Promise<boolean>;
}

const ContactSection = ({}: ContactSectionProps) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      requirements: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = form.handleSubmit(async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      console.log("Sending email with data:", data);
      const response = await emailjs.send(
        "service_fh5bxw9",
        "template_tzj8b6s",
        {
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          message: data.requirements,
          to_name: "AZMR Consulting",
        },
        "atglY-4HtQvi-Nglv",
      );

      console.log("EmailJS response:", response);
      if (response.status === 200) {
        alert("Thank you for your message! We will get back to you soon.");
        form.reset();
      } else {
        throw new Error(`Failed to submit form: ${response.status}`);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(
        "Sorry, there was an error submitting your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <section
      id="contact"
      className="w-full min-h-[500px] bg-background py-16 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your IT infrastructure? Let's discuss how we can
            help your business thrive.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project needs..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto min-w-[200px]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
