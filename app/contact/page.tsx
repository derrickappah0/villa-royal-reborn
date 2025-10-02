import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSplit } from "@/components/contact/contact-split"
import { ContactForm } from "@/components/contact/contact-form"
import { WhatsAppButton } from "@/components/contact/whatsapp-button"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <ContactHero />
      <div className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </div>
      <ContactSplit />
      <WhatsAppButton />
    </main>
  )
}
