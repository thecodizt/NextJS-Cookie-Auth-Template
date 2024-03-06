"use client";

import * as React from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => {
				if (theme === "light") {
					setTheme("dark");
				} else {
					setTheme("light");
				}
			}}
		> 
    {theme === "light" ? <Sun /> : <Moon />}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
