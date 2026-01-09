import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import posthog from "posthog-js";
import { TrackedLink } from "./tracked-link";

describe("TrackedLink", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders children correctly", () => {
    render(
      <TrackedLink href="/test" eventName="test_click">
        Click me
      </TrackedLink>,
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders with correct href", () => {
    render(
      <TrackedLink href="/some-path" eventName="test_click">
        Link
      </TrackedLink>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/some-path");
  });

  it("calls posthog.capture with event name on click", () => {
    render(
      <TrackedLink href="/download" eventName="file_downloaded">
        Download
      </TrackedLink>,
    );

    const link = screen.getByRole("link");
    fireEvent.click(link);

    expect(posthog.capture).toHaveBeenCalledTimes(1);
    expect(posthog.capture).toHaveBeenCalledWith("file_downloaded", {
      destination_url: "/download",
    });
  });

  it("includes custom event properties when provided", () => {
    render(
      <TrackedLink
        href="/resume.pdf"
        eventName="resume_downloaded"
        eventProperties={{ source: "header", format: "pdf" }}
      >
        Download Resume
      </TrackedLink>,
    );

    const link = screen.getByRole("link");
    fireEvent.click(link);

    expect(posthog.capture).toHaveBeenCalledWith("resume_downloaded", {
      destination_url: "/resume.pdf",
      source: "header",
      format: "pdf",
    });
  });

  it("applies className when provided", () => {
    render(
      <TrackedLink
        href="/test"
        eventName="test_click"
        className="custom-class text-blue-500"
      >
        Styled Link
      </TrackedLink>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveClass("custom-class", "text-blue-500");
  });

  it("sets target attribute when provided", () => {
    render(
      <TrackedLink href="/external" eventName="external_click" target="_blank">
        External Link
      </TrackedLink>,
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("tracks multiple clicks", () => {
    render(
      <TrackedLink href="/test" eventName="multi_click">
        Click Multiple
      </TrackedLink>,
    );

    const link = screen.getByRole("link");
    fireEvent.click(link);
    fireEvent.click(link);
    fireEvent.click(link);

    expect(posthog.capture).toHaveBeenCalledTimes(3);
  });
});
