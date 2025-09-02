import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-30caafc0/health", (c) => {
  return c.json({ status: "ok" });
});

// Booking submission endpoint
app.post("/make-server-30caafc0/bookings", async (c) => {
  try {
    const booking = await c.req.json();
    
    // Generate a unique booking ID
    const bookingId = `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store booking in KV store
    await kv.set(bookingId, {
      ...booking,
      id: bookingId,
      status: "pending",
      createdAt: new Date().toISOString()
    });
    
    console.log(`New booking created: ${bookingId}`, booking);
    
    return c.json({ 
      success: true, 
      bookingId,
      message: "Appointment booked successfully!"
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return c.json({ 
      success: false, 
      error: "Failed to book appointment" 
    }, 500);
  }
});

// Get all bookings (for admin use)
app.get("/make-server-30caafc0/bookings", async (c) => {
  try {
    const bookings = await kv.getByPrefix("booking_");
    return c.json({ success: true, bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return c.json({ 
      success: false, 
      error: "Failed to fetch bookings" 
    }, 500);
  }
});

// Contact form submission endpoint
app.post("/make-server-30caafc0/contact", async (c) => {
  try {
    const contact = await c.req.json();
    
    // Generate a unique contact ID
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store contact form in KV store
    await kv.set(contactId, {
      ...contact,
      id: contactId,
      status: "new",
      createdAt: new Date().toISOString()
    });
    
    console.log(`New contact form submitted: ${contactId}`, contact);
    
    return c.json({ 
      success: true, 
      contactId,
      message: "Contact form submitted successfully!"
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return c.json({ 
      success: false, 
      error: "Failed to submit contact form" 
    }, 500);
  }
});

Deno.serve(app.fetch);