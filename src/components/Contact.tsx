import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100">
            Contact me today for a free consultation and personalized quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white text-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="insuranceType">Type of Insurance</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select insurance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="life">Life Insurance</SelectItem>
                    <SelectItem value="health">Health & Disability</SelectItem>
                    <SelectItem value="auto">Auto Insurance</SelectItem>
                    <SelectItem value="home">Home Insurance</SelectItem>
                    <SelectItem value="business">Business Insurance</SelectItem>
                    <SelectItem value="retirement">Retirement Planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me more about your insurance needs"
                  className="h-24"
                />
              </div>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={async () => {
                  try {
                    const formData = {
                      firstName: (document.getElementById('firstName') as HTMLInputElement)?.value,
                      lastName: (document.getElementById('lastName') as HTMLInputElement)?.value,
                      email: (document.getElementById('email') as HTMLInputElement)?.value,
                      phone: (document.getElementById('phone') as HTMLInputElement)?.value,
                      insuranceType: (document.querySelector('[data-testid="insurance-type"]') as HTMLElement)?.textContent,
                      message: (document.getElementById('message') as HTMLTextAreaElement)?.value
                    };

                    const { projectId, publicAnonKey } = await import('../utils/supabase/info');
                    
                    const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-30caafc0/contact`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${publicAnonKey}`
                      },
                      body: JSON.stringify(formData)
                    });

                    const result = await response.json();
                    
                    if (result.success) {
                      alert("Quote request submitted successfully! I'll get back to you within 24 hours.");
                    } else {
                      throw new Error(result.error);
                    }
                  } catch (error) {
                    console.error("Contact form error:", error);
                    alert("There was an error submitting your request. Please try again.");
                  }
                }}
              >
                Request Quote
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <p>Phone</p>
                    <p className="text-blue-100">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <p>Email</p>
                    <p className="text-blue-100">sarah.mitchell@ia.ca</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p>Office</p>
                    <p className="text-blue-100">789 West Georgia Street, Suite 1200<br />Vancouver, BC V6C 2T8</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6" />
                <h4 className="text-xl">Schedule a Meeting</h4>
              </div>
              <p className="text-blue-100 mb-4">
                Book a free 30-minute consultation to discuss your insurance needs in detail.
              </p>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => window.location.href = '#booking'}
              >
                Book Appointment
              </Button>
            </div>

            <div className="bg-blue-800 rounded-lg p-6">
              <h4 className="text-xl mb-3">Office Hours</h4>
              <div className="space-y-2 text-blue-100">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}