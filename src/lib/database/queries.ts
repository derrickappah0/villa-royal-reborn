import { createClient } from '@/lib/supabase/server'
import { Database } from './types'

type Tables = Database['public']['Tables']

// Appointments
export async function createAppointment(data: Tables['appointments']['Insert']) {
  const supabase = createClient()
  
  const { data: appointment, error } = await supabase
    .from('appointments')
    .insert(data)
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to create appointment: ${error.message}`)
  }

  return appointment
}

export async function getAppointments() {
  const supabase = createClient()
  
  const { data: appointments, error } = await supabase
    .from('appointments')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch appointments: ${error.message}`)
  }

  return appointments
}

export async function updateAppointmentStatus(id: string, status: Tables['appointments']['Row']['status']) {
  const supabase = createClient()
  
  const { data: appointment, error } = await supabase
    .from('appointments')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to update appointment: ${error.message}`)
  }

  return appointment
}

// Build Requests
export async function createBuildRequest(data: Tables['build_requests']['Insert']) {
  const supabase = createClient()
  
  const { data: buildRequest, error } = await supabase
    .from('build_requests')
    .insert(data)
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to create build request: ${error.message}`)
  }

  return buildRequest
}

export async function getBuildRequests() {
  const supabase = createClient()
  
  const { data: buildRequests, error } = await supabase
    .from('build_requests')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch build requests: ${error.message}`)
  }

  return buildRequests
}

// Contact Messages
export async function createContactMessage(data: Tables['contact_messages']['Insert']) {
  const supabase = createClient()
  
  const { data: message, error } = await supabase
    .from('contact_messages')
    .insert(data)
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to create contact message: ${error.message}`)
  }

  return message
}

export async function getContactMessages() {
  const supabase = createClient()
  
  const { data: messages, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch contact messages: ${error.message}`)
  }

  return messages
}

// Payment Plans
export async function getPaymentPlans() {
  const supabase = createClient()
  
  const { data: plans, error } = await supabase
    .from('payment_plans')
    .select('*')
    .eq('is_active', true)
    .order('starting_price', { ascending: true })

  if (error) {
    throw new Error(`Failed to fetch payment plans: ${error.message}`)
  }

  return plans
}

export async function createPaymentPlan(data: Tables['payment_plans']['Insert']) {
  const supabase = createClient()
  
  const { data: plan, error } = await supabase
    .from('payment_plans')
    .insert(data)
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to create payment plan: ${error.message}`)
  }

  return plan
}
