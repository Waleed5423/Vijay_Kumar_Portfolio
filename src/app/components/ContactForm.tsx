"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Send, Loader2 } from "lucide-react";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = "service_dmendi9";
    const templateId = "template_0vumgwi";
    const publicKey = "YrsiLDpY_2AtAAG10";

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current as HTMLFormElement,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Message Sent Successfully!",
            description:
              "Thank you for reaching out. I'll get back to you soon.",
          });
          setIsLoading(false);
          // Reset form
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Failed to Send Message",
            description: "Please try again or contact me directly via email.",
            variant: "destructive",
          });
          setIsLoading(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="h-full flex flex-col">
      <div className="space-y-6 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-800">
              Full Name
            </Label>
            <Input
              id="name"
              name="from_name"
              placeholder="Your full name"
              required
              className="bg-white/80 border-slate-200/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-800">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              name="from_email"
              placeholder="your.email@company.com"
              required
              className="bg-white/80 border-slate-200/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-slate-800">
              Company
            </Label>
            <Input
              id="company"
              name="company"
              placeholder="Your company name"
              className="bg-white/80 border-slate-200/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position" className="text-slate-800">
              Your Position
            </Label>
            <Input
              id="position"
              name="position"
              placeholder="Your job title"
              className="bg-white/80 border-slate-200/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-slate-800">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Project discussion, job opportunity, consultation..."
            required
            className="bg-white/80 border-slate-200/50"
          />
        </div>

        <div className="space-y-2 flex-1 flex flex-col">
          <Label htmlFor="message" className="text-slate-800">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project, timeline, requirements, or any questions you have about my QA experience..."
            className="flex-1 min-h-[150px] bg-white/80 border-slate-200/50"
            required
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          variant="gradient"
          className="w-full text-lg py-6"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin text-white" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2 text-white" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
