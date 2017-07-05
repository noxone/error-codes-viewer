package org.olafneumann.sqlcodes;

import java.io.IOException;

interface IoSupplier<T> {
	T get() throws IOException;
}