'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const loginUserFormSchema = z.object({
	email: z
		.string()
		.min(1, {
			message: 'Email is required',
		})
		.email(),
	password: z.string().min(8, {
		message: 'Password must be at least 8 character long',
	}),
})

export default function Login() {
	const userLoginForm = useForm<z.infer<typeof loginUserFormSchema>>({
		resolver: zodResolver(loginUserFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function onSubmit(data: z.infer<typeof loginUserFormSchema>) {
		console.log(data)
	}

	return (
		<div className="h-screen grid place-content-center place-items-center">
			<Card>
				<CardHeader>
					<CardTitle>Login to access your account</CardTitle>
					<CardDescription>
						Enter your email and password to log into your account
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-2">
					<Form {...userLoginForm}>
						<form
							name="userlogin"
							autoComplete="on"
							onSubmit={userLoginForm.handleSubmit(onSubmit)}
							className="space-y-6"
						>
							<FormField
								control={userLoginForm.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="Please enter your email"
												required
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={userLoginForm.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												placeholder="Please enter your password"
												required
												type="password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button className="w-full " type="submit">
								login
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}
