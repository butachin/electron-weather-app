#!/usr/bin/env bash

set -eu

export PATH="$PATH:$(yarn bin)"

PROTO_SRC=../Proto
PROTO_DEST=./src/gRPC/proto

mkdir -p ${PROTO_DEST}

protoc \
    --js_out=import_style=commonjs:${PROTO_DEST} \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DEST} \
    -I ${PROTO_SRC} \
    ${PROTO_SRC}/*