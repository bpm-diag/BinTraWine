#!/bin/sh

# This is a workaround for issues with esbuild in Docker containers.
npm rebuild esbuild

exec "$@"
