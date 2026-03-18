import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-16 px-4" style={{ background: "var(--gradient-footer)" }}>
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary-foreground mb-4">
            <Leaf className="w-6 h-6" />
            The Transition
          </div>
          <p className="text-primary-foreground/60 max-w-sm">
            Plant-based healthcare guided by real doctors. Transform your health naturally.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Programs", "Pricing", "Blog"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <Mail className="w-4 h-4" /> hello@thetransition.com
            </li>
            <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <Phone className="w-4 h-4" /> (555) 123-4567
            </li>
            <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <MapPin className="w-4 h-4" /> Los Angeles, CA
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-primary-foreground/40 text-sm">© 2026 The Transition by Ask Dr. J. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
