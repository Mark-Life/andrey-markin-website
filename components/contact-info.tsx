import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, User } from "lucide-react"
import { contact } from "@/data/contact"

export function ContactInfo() {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardContent className="pt-6">
        <h3 className="text-2xl font-bold mb-6">Contact</h3>

        <div className="space-y-6">
          <div className="flex items-center">
            <User className="h-5 w-5 text-primary mr-3" />
            <div>
              <p className="font-medium">Andrey Markin</p>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="h-5 w-5 text-primary mr-3" />
            <div>
              <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                {contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-primary mr-3" />
            <div>
              <a
                href={contact.scheduleLink}
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  window.open(contact.scheduleLink, "_blank")
                }}
              >
                Schedule a meeting
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-6">
          <p className="text-sm text-foreground/70">
            Mark Life Ltd
            <br />
            UIC/UIN: 208147965
          </p>
        </div>

        <div className="border-t border-border pt-6">
          <h4 className="font-medium mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a
              href={`mailto:${contact.email}`}
              className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-primary" />
            </a>
            <a
              href={contact.socialMedia.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              </svg>
            </a>
            <a
              href={contact.socialMedia.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors"
              aria-label="Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 